import { loginInt } from "./../../../api/user"
import { setCookie } from "./../../../api/cookie"
import { USERNAME, COOKID, HESTORY, EXPIREDAYS, PASSWORD } from "./../../../api/storge"
import Vue from "vue"
import Component from "vue-class-component"

@Component
export default class Login extends Vue {
  constructor() {
    super()
    console.log("Login enter")
  }

  private checked = false

  private form = {
    username: localStorage.getItem(USERNAME) || '',
    password: localStorage.getItem(PASSWORD) || '',
    remember: localStorage.getItem(PASSWORD) != null
  }

  /**
   * 历史返回
   * return void
   */
  private back() {
    let fullPath = localStorage.getItem(HESTORY)
    this.$router.replace({ path: fullPath || '/admin/home' })
  }

  /**
   * 登录
   * return void
   */
  private handlelogin = () => {
    if (this.form.remember) { // 记住密码
      localStorage.setItem(USERNAME, this.form.username)
    }
    loginInt.login(this.form, (res) => {
      if (res.status == 200) {
        if (this.form.remember) { // 记住密码
          localStorage.setItem(PASSWORD, this.form.password)
        }
        sessionStorage.setItem(USERNAME, this.form.username)
        setCookie(COOKID, res.data, EXPIREDAYS)
        this.$message.success('登录成功')
        this.back()
      } else {
        this.$message.error('登录失败')
      }
    })
  }

  /**
   * 用户名失去焦点设置密码输入框聚焦
   * return void
   */
  private uihandleBlur = () => {
    let pwInput: any = this.$refs.passwordInput
    console.log(pwInput.focus())
  }
}