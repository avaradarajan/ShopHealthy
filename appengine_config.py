from google.appengine.ext import vendor
import os
import sys
on_appengine = os.environ.get('SERVER_SOFTWARE','').startswith('Development')


# [END vendor]