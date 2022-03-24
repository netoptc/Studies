from django.contrib import admin
from django.urls import include, path


# O Include permite fazer refenrecia a outros urlsConf
urlpatterns = [
    path('enquetes/', include('enquetes.urls')),
    path('admin/', admin.site.urls),
]