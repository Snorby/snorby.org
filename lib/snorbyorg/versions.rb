module Snorbyorg
  
  VERSION='0.1.0'
  
  module Versions
    
    def self.snorby
      '2.3.11'
    end
    
    def self.security_onion
      '20111222'
    end
    
    def self.snorby_download
      "https://github.com/Snorby/snorby/zipball/v#{Snorbyorg::Versions.snorby}"
    end
    
    def self.security_onion_download
      "http://downloads.sourceforge.net/project/security-onion/security-onion-live-#{Snorbyorg::Versions.security_onion}.iso?r=&ts=#{Time.now.to_i}&use_mirror=iweb"
    end
    
  end
  
end
