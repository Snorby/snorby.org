module Snorbyorg
  
  VERSION='0.1.0'
  
  module Versions
   
    def self.data
      @data ||= {
        :md5 => '9561499797aad05fa4bb20b949931d0d',
        :date => '03/18/2012',
        :size => '1.3M',
        :version => self.snorby
      }

      @data
    end

    def self.snorby
      '2.5.0'
    end
    
    def self.security_onion
      '20111222'
    end
    
    def self.snorby_download
      "https://github.com/Snorby/snorby/zipball/v#{Snorbyorg::Versions.snorby}"
    end
    
    def self.security_onion_download
      # "http://sourceforge.net/projects/security-onion/files/security-onion-live-#{Snorbyorg::Versions.security_onion}.iso/download"
      "http://sourceforge.net/projects/security-onion/files/latest/download?source=files"
    end
    
  end
  
end
