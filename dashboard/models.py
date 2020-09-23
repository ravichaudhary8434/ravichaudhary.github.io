from django.db import models
from datetime import date


class MyResume(models.Model):
    resume = models.FileField(upload_to="pdf/MyResume")

class Job(models.Model):
    title = models.CharField(max_length=30, default="Title")
    summary =models.TextField(blank=True)
    location =models.CharField(max_length=200)
    startDate = models.DateField(default=date.today)
    endDate = models.DateField(default=date.today, blank=True, null=True)

    def __str__(self):
        return self.title

    

class Project(models.Model):
    title = models.CharField(max_length=30, default="Project")
    image = models.ImageField(upload_to="images/projects/")
    summary = models.TextField(blank=True, max_length=300)
    link = models.URLField(max_length=200, default="#")
    platform =models.CharField(max_length=20, blank=True)

    def __str__(self):
        return self.title

class About(models.Model):
    profilePic =models.ImageField(upload_to="images/profile/", blank=True)
    about1 = models.TextField(blank=True)
    about2 = models.TextField(blank=True)

    def __str__(self):
        return "About"

class CodingSkill(models.Model):
    title = models.CharField(max_length=20)
    rating = models.IntegerField(default=0)
    ranking = models.IntegerField(default=0)
    solved = models.IntegerField(default=0)
    link = models.URLField(max_length=200)

    def __str__(self):
        return self.title


class Language(models.Model):
    title = models.CharField(max_length=20)
    percent = models.IntegerField(default=0)
    color = models.CharField(max_length=15)
    
    @staticmethod    
    def calc(a):
        return int((440 -(440 * a)/100))

    def offset(self):
        return self.calc(self.percent)

    def __str__(self):
        return self.title


class ITConstruct(models.Model):
    title = models.CharField(max_length=20)
    percent = models.IntegerField(default=0)
    color = models.CharField(max_length=15)

    @staticmethod    
    def calc(a):
        return int((440 -(440 * a)/100))

    def offset(self):
        return self.calc(self.percent)

    def __str__(self):
        return self.title


class Framework(models.Model):
    title = models.CharField(max_length=20)
    percent = models.IntegerField(default=0)
    color = models.CharField(max_length=15)

    @staticmethod    
    def calc(a):
        return int((440 -(440 * a)/100))

    def offset(self):
        return self.calc(self.percent)

    def __str__(self):
        return self.title


class Development(models.Model):
    title = models.CharField(max_length=20)
    percent = models.IntegerField(default=0)
    color = models.CharField(max_length=15)

    @staticmethod    
    def calc(a):
        return int((440 -(440 * a)/100))

    def offset(self):
        return self.calc(self.percent)

    def __str__(self):
        return self.title


class Explore(models.Model):
    title = models.CharField(max_length=15, default="Title")
    choice1 = models.CharField(max_length=25, blank=True)
    choice2 = models.CharField(max_length=25, blank=True)
    choice3 = models.CharField(max_length=255, blank=True)
    image1 = models.ImageField(upload_to="images/explore/")
    image2 = models.ImageField(upload_to="images/explore/")


    def __str__(self):
        return self.title

class Blog(models.Model):
    title = models.CharField(max_length=50, default="Title")
    summary = models.TextField(max_length=500, blank=True)
    day = models.IntegerField()
    month = models.CharField(max_length=15)
    image = models.ImageField(upload_to="images/Blog/")
    link = models.URLField()

