module Snorbyorg

  VERSION='0.1.0'

  module Versions

    def self.data
      @data ||= {
        :md5 => 'cb543ee9ade45bc1a069b31c57f990f5',
        :date => '04/15/2013',
        :size => '1.3 MB',
        :type => "tar.gz",
        :version => self.snorby
      }

      @data
    end

    def self.snorby
      '2.6.0'
    end

    def self.snorby_download
      "https://github.com/Snorby/snorby/archive/v#{Snorbyorg::Versions.snorby}.tar.gz"
    end

  end

end
