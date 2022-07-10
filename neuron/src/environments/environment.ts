export const environment = {

  production: false,

  // host urls
  host_authService: "https://localhost:5115",
  host_userService: "https://localhost:0000",
  host_iamService: "https://localhost:0000",
  host_recruitmentService: "https://localhost:0000",

  // auth options
  auth_clientId: "angular-client",
  auth_clientRoot: "http://localhost:4200", // temp config of HTPP!!!
  auth_scope: "openid profile",
  auth_responseType: "code",
  auth_automaticSilentRenew: true,

  // redux option
  redux_log: false

};