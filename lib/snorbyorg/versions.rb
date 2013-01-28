module Snorbyorg

  VERSION='0.1.0'

  module Versions

    def self.data
      @data ||= {
        :md5 => 'cb543ee9ade45bc1a069b31c57f990f5',
        :date => '01/28/2012',
        :size => '1.6 MB',
        :version => self.snorby
      }

      @data
    end

    def self.snorby
      '2.5.6'
    end

    def self.snorby_download
      "https://github.com/Snorby/snorby/zipball/v#{Snorbyorg::Versions.snorby}"
    end

  end

end
