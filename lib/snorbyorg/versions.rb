module Snorbyorg
  
  VERSION='0.1.0'
  
  module Versions
    
    def self.snorby
      '2.2.2'
    end
    
    def self.insta_snorby
      '0.6.0'
    end
    
    def self.snorby_download
      "https://github.com/Snorby/snorby/zipball/#{Snorbyorg::Versions.snorby}"
    end
    
    def self.insta_snorby_download
      "http://www.snorby.org/Insta-Snorby-#{Snorbyorg::Versions.insta_snorby}.iso"
    end
    
  end
  
end