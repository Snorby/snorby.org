class PagesController < ApplicationController

  caches_page :home

  def home
  end

  def version
    render :json => {
      :version => Snorbyorg::Versions.snorby,
      :changeLog => 'https://github.com/Snorby/snorby/blob/master/ChangeLog.md',
      :download => Snorbyorg::Versions.snorby_download,
      :md5 => Snorbyorg::Versions.data[:md5],
      :size => Snorbyorg::Versions.data[:size],
      :date => Snorbyorg::Versions.data[:date]
    }, :callback => params[:callback]
  end

  def iphone

  end

  def redirect
    redirect_to "https://github.com/Snorby/snorby/zipball/v#{Snorbyorg::Versions.snorby}"
  end

  def redirect_snorby_cloud
    redirect_to "https://cloud.snorby.org"
  end

end
