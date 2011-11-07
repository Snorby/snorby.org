module Snorbyorg
  
  VERSION='0.1.0'
  
  module Versions
    
    def self.snorby
      '2.3.11'
    end
    
    def self.insta_snorby
      '0.8.0'
    end
    
    def self.snorby_download
      "https://github.com/Snorby/snorby/zipball/v#{Snorbyorg::Versions.snorby}"
    end
    
    def self.insta_snorby_download
      "http://www.snorby.org/Insta-Snorby-#{Snorbyorg::Versions.insta_snorby}.iso"
    end
    
  end
  
end
