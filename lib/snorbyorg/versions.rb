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
      "http://sourceforge.net/projects/security-onion/files/security-onion-live-#{Snorbyorg::Versions.security_onion}.iso/download"
    end
    
  end
  
end
