module Snorbyorg
  
  VERSION='0.1.0'
  
  module Versions
   
    def self.data
      @data ||= {
        :md5 => '1db04dca4e65ca3fb6aa70ae8edbb2af',
        :date => '02/16/2012',
        :size => '2.1MB',
        :version => self.snorby
      }

      @data
    end

    def self.snorby
      '2.3.14'
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
