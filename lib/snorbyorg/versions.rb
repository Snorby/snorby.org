module Snorbyorg

  VERSION='0.1.0'

  module Versions

    def self.data
      @data ||= {
        :md5 => '168b1125309df05fadf533564124264b',
        :date => '10/15/2012',
        :size => '1.6 MB',
        :version => self.snorby
      }

      @data
    end

    def self.snorby
      '2.5.3'
    end

    def self.snorby_download
      "https://github.com/Snorby/snorby/zipball/v#{Snorbyorg::Versions.snorby}"
    end

  end

end
