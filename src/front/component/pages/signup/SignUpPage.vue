<template>
  <signup-template>
    <template v-slot:header>
      <logo-organism> </logo-organism>
    </template>
    <template v-slot:signup>
      <signup-organism>
        <template v-slot:title>
          <title-molecule title="ユーザー登録" />
        </template>
        <template v-slot:note> </template>
        <template v-slot:provider-name>
          <input-text-molecule
            label="ユーザー名称"
            :validation="validation.providerName"
            :errorText="errorText.providerName"
            :value="newRegistItem.providerName"
            :required="true"
            requiredText="必須"
            @change="setProviderName"
          />
        </template>
        <template v-slot:login-mail-address>
          <input-text-molecule
            label="メールアドレス"
            :validation="validation.userLoginId"
            :errorText="errorText.userLoginId"
            :value="newRegistItem.userLoginId"
            :required="true"
            requiredText="必須"
            @change="setMailAddress"
          />
        </template>
        <template v-slot:login-password>
          <input-password-molecule
            label="パスワード(英数字含む6文字以上)"
            :validation="validation.userPassword"
            :errorText="errorText.userPassword"
            :value="newRegistItem.userPassword"
            :required="true"
            requiredText="必須"
            @change="setPassword"
          />
        </template>
        <template v-slot:signup-button>
          <button-molecule
            label="登録"
            :disabled="isDisabledButton"
            @click="newregist"
            :errorText="errorText.requestError"
          />
        </template>
      </signup-organism>
    </template>
  </signup-template>
</template>
<script lang="ts">
import Vue from 'vue';
import { mapActions } from 'vuex';
import Axios from 'axios';
import SignUpTemplate from '@/front/component/templates/signup/SignUpTemplate.vue';
import LogoOrganism from '@/front/component/organisms/header/LogoOrganism.vue';
import SignUpOrganism from '@/front/component/organisms/signup/SignUpOrganism.vue';
import InputTextMolecule from '@/front/component/molecules/input/InputTextMolecule.vue';
import InputPasswordMolecule from '@/front/component/molecules/input/InputPasswordMolecule.vue';
import TitleMolecule from '@/front/component/molecules/text/TitleMolecule.vue';
import ButtonMolecule from '@/front/component/molecules/button/ButtonMolecule.vue';

export default Vue.extend({
  created() {
    this.openLoading();
  },
  mounted() {
    this.closeLoading();
  },
  data: function () {
    return {
      isDisabledButton: true,
      addressList: '',
      newRegistItem: {
        providerName: '',
        userLoginId: '',
        userPassword: '',
        from: this.$route.query.from,
      },
      validation: {
        providerName: false,
        userLoginId: false,
        userPassword: false,
        isRuleCheck: false,
      },
      errorText: {
        providerName: '',
        userLoginId: '',
        userPassword: '',
        requestError: '',
      },
    };
  },
  methods: {
    ...mapActions('common', {
      openLoading: 'openLoading',
      closeLoading: 'closeLoading',
    }),
    setProviderName(value: string) {
      if (value === '') {
        this.validation.providerName = false;
        this.errorText.providerName = '事業名称が入力されていません';
      } else if (value.length >= 128) {
        this.validation.providerName = false;
        this.errorText.providerName = '127文字以内で入力してください';
      } else {
        this.validation.providerName = true;
      }
      this.newRegistItem.providerName = value;
      this.checkInputAll();
    },
    setMailAddress(value: string) {
      if (value === '') {
        this.validation.userLoginId = false;
        this.errorText.userLoginId = 'Eメールアドレスが空白です';
      } else if (
        value.indexOf('@') === -1 ||
        value.split('@')[0] === '' ||
        value.split('@')[1] === ''
      ) {
        this.validation.userLoginId = false;
        this.errorText.userLoginId = '有効なEメールアドレスではありません';
      } else if (value.length >= 256) {
        this.validation.userLoginId = false;
        this.errorText.userLoginId = '255文字以内で入力してください';
      } else {
        this.validation.userLoginId = true;
      }
      this.newRegistItem.userLoginId = value.replace(
        /[Ａ-Ｚａ-ｚ０-９]/g,
        function (s) {
          return String.fromCharCode(s.charCodeAt(0) - 65248);
        }
      );
      this.checkInputAll();
    },
    setPassword(value: string) {
      if (value === '') {
        this.validation.userPassword = false;
        this.errorText.userPassword = 'パスワードが入力されていません';
      } else if (value.length < 6) {
        this.validation.userPassword = false;
        this.errorText.userPassword = 'パスワードは6文字以上で入力してください';
      } else if (value.length > 100) {
        this.validation.userPassword = false;
        this.errorText.userPassword =
          'パスワードは100文字以下で入力してください';
      } else if (!value.match(/^(?=.*?[a-z])(?=.*?\d)[\S]{6,100}$/i)) {
        this.validation.userPassword = false;
        this.errorText.userPassword =
          '半角英数字をそれぞれ1文字以上含めてください';
      } else {
        this.validation.userPassword = true;
      }
      this.newRegistItem.userPassword = value.replace(
        /[Ａ-Ｚａ-ｚ０-９]/g,
        function (s) {
          return String.fromCharCode(s.charCodeAt(0) - 65248);
        }
      );
      this.checkInputAll();
    },
    checkRules(inputValue: boolean) {
      this.validation.isRuleCheck = inputValue;
      this.checkInputAll();
    },
    checkInputAll: function () {
      var allOk = false;
      for (const objectProperty of Object.entries(this.validation)) {
        if (!objectProperty[1]) {
          allOk = false;
          break;
        }
        allOk = true;
      }
      this.isDisabledButton = !allOk;
    },
    newregist: function () {
      var param = {
        params: this.newRegistItem,
      };
      Axios.post('/api/user/newsimpleregist', param)
        .then(() => {
          this.push();
        })
        .catch((error) => {
          this.errorText.requestError = error.response.data.error_message;
        });
    },
    push: function () {
      this.$router.push({
        path: '/tempregist',
      });
    },
  },
  components: {
    'signup-template': SignUpTemplate,
    'logo-organism': LogoOrganism,
    'signup-organism': SignUpOrganism,
    'input-text-molecule': InputTextMolecule,
    'input-password-molecule': InputPasswordMolecule,
    'title-molecule': TitleMolecule,
    'button-molecule': ButtonMolecule,
  },
});
</script>
