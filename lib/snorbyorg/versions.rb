module Snorbyorg

  VERSION='0.1.0'

  module Versions

    def self.data
      @data ||= {
        :md5 => '6e7f30c5fdf21e97f993126e234a0347',
        :date => '05/04/2013',
        :size => '1.3 MB',
        :type => "tar.gz",
        :version => self.snorby
      }

      @data
    end

    def self.snorby
      '2.6.1'
    end

    def self.snorby_download
      "https://github.com/Snorby/snorby/archive/v#{Snorbyorg::Versions.snorby}.tar.gz"
    end

  end

end
