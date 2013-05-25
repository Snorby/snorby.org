module Snorbyorg

  VERSION='0.1.0'

  module Versions

    def self.data
      @data ||= {
        :md5 => '4276fbbb5bd1ae6a6e5352b8cbb9a467',
        :date => '05/25/2013',
        :size => '1.3 MB',
        :type => "tar.gz",
        :version => self.snorby
      }

      @data
    end

    def self.snorby
      '2.6.2'
    end

    def self.snorby_download
      "https://github.com/Snorby/snorby/archive/v#{Snorbyorg::Versions.snorby}.tar.gz"
    end

  end

end
