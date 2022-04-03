export enum DrawerRoutes {
  HOME = 'mainStack',
  HELP = 'helpStack',
  SETTINGS = 'settingsStack',
  AUTH = 'authStack',
}

export enum AuthStackRoutes {
  SIGN_IN = 'signIn',
  SIGN_UP = 'signUp',
  VERIFICATION = 'verification',
  RESET_PASSWORD = 'resetPasswordStack',
  HOME = 'mainStack',
}

export enum MainStackRoutes {
  HOME = 'home',
  JAR = 'jar',
  WISH_LIST = 'wishList',
  AUTH = 'authStack',
}

export enum ResetPasswordStackRoutes {
  RESET_PASSWORD = 'resetPassword',
  VERIFICATION = 'verification',
  NEW_PASSSWORD = 'newPassword',
}

export enum SettingsStackRoutes {
  SETTINGS = 'settings',
  LANGUAGES = 'languages',
  OLD_PASSSWORD = 'oldPassword',
  NEW_PASSSWORD = 'newPassword',
  RESET_PASSWORD = 'resetPasswordStack',
}

export enum HelpStackRoutes {
  HELP = 'help',
}

export enum Stacks {
  RESET_PASSWORD = 'resetPassword',
  AUTH = 'auth',
  SETTINGS = 'settings',
  HELP = 'help',
  MAIN = 'main',
}
