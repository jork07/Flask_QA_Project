
# 配置数据库的地址
SQLALCHEMY_DATABASE_URI = 'mysql://root:hjw0411@127.0.0.1/qa'
# 跟踪数据库的修改 --> 不建议开启 未来的版本中会移除
SQLALCHEMY_TRACK_MODIFICATION = False

DEBUG = True

SECRET_KEY = "1234"

# 邮箱配置
MAIL_SERVER = "smtp.qq.com"
MAIL_PORT = 465
MAIL_USE_TLS = False
MAIL_USE_SSL = True
MAIL_DEBUG = True
MAIL_USERNAME = "1448309019@qq.com"
MAIL_PASSWORD = "wfhcjqkzsioujhhc"
MAIL_DEFAULT_SENDER = "1448309019@qq.com"
