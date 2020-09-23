from django.shortcuts import render ,get_object_or_404
from .models import *
from django.http import Http404

def homepage(request):
    resume =MyResume.objects.all()
    jobs =Job.objects.all()
    projects =Project.objects.all()
    about = About.objects.all()
    coding = CodingSkill.objects.all()
    languages = Language.objects.all()
    itconstruct = ITConstruct.objects.all()
    frameworks = Framework.objects.all()
    tools = Development.objects.all()
    explore =Explore.objects.all()
    blog = Blog.objects.all()
    return render(request, 'dashboard/index.html', {
        'resume' :resume,
        'jobs' :jobs,
        'projects' :projects,
        'about' :about,
        'coding' :coding,
        "languages" :languages,
        "itConstructs" :itconstruct,
        "frameworks" :frameworks,
        "tools" :tools,
        "explore" :explore,
        "blogs" : blog,
    })


