Pod::Spec.new do |s|

  s.name         = "HMWKWebViewHandler"

  s.version      = "0.0.2"

  s.summary      = "JS & OC"

  s.description  = <<-DESC
TODO: JS & OC Calling Each Other
                       DESC

  s.homepage     = "https://github.com/caochangxi/HMWKWebViewHandler"
  
  s.license      = { :type => 'MIT', :file => 'LICENSE' }

  s.author       = { '曹长喜' => '941038274@qq.com' }

  s.source       = { :git => 'https://github.com/caochangxi/HMWKWebViewHandler.git', :tag => s.version.to_s }

  s.ios.deployment_target = '8.0'

  s.source_files = 'HMWKWebViewHandler/Classes/**/*.{h,m}'

  s.resources    = 'HMWKWebViewHandler/Resources/*.js'

  s.requires_arc = true

end
