Pod::Spec.new do |s|

  s.name         = "HMWKWebViewHandler"

  s.version      = "0.0.1"

  s.summary      = "JS & OC"

  s.description  = "JS & OC calling each other"

  s.homepage     = "https://github.com/caochangxi/HMWKWebViewHandler"

  s.license      = "MIT"

  s.author       = { "曹长喜" => "941038274@qq.com" }

  s.platform     = :ios, "8.0"

  s.source       = { :git => "https://github.com/caochangxi/HMWKWebViewHandler.git", :tag => "#{s.version}" }

  s.source_files  = "HMWKWebViewHandler", "HMWKWebViewHandler/Classes/*.{h,m}"

  s.public_header_files = "HMWKWebViewHandler/Classes/*.h"

  s.requires_arc = true

end
