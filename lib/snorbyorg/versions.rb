module Snorbyorg
  
  VERSION='0.1.0'
  
  module Versions
   
    def self.data
      @data ||= {
        :md5 => '5a2c50b0905c7d1ae98c4d81c7ad5997',
        :date => '09/30/2012',
        :size => '1.6 MB',
        :version => self.snorby
      }

      @data
    end

    def self.snorby
      '2.5.2'
    end
    
    def self.security_onion
      ''
    end
    
    def self.snorby_download
      "https://github.com/Snorby/snorby/zipball/v#{Snorbyorg::Versions.snorby}"
    end
    
    def self.security_onion_download
      # "http://sourceforge.net/projects/security-onion/files/security-onion-live-#{Snorbyorg::Versions.security_onion}.iso/download"
      # "http://sourceforge.net/projects/security-onion/files/latest/download?source=files"
      "http://code.google.com/p/security-onion/wiki/Installation"
    end
    
  end
  
end
