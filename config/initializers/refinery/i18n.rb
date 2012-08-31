# encoding: utf-8

Refinery::I18n.configure do |config|
   config.enabled = true

   config.default_locale = :en

   config.current_locale = :en

   config.default_frontend_locale = "zh-TW"

   config.frontend_locales = ["zh-TW", :en]

   config.locales = {:en=>"English", :"zh-CN"=>"Simplified Chinese", :"zh-TW"=>"Traditional Chinese"}
end
