from django.contrib.auth.models import AbstractUser
from django.db import models
from django.utils import timezone

class User(AbstractUser):
    ROLE_CHOICES = (
        ('admin', 'Admin'),
        ('teacher', 'Teacher'),
        ('student', 'Student'),
    )

    role = models.CharField(max_length=10, choices=ROLE_CHOICES)
    registration_number = models.CharField(max_length=20, blank=True, null=True, unique=True)

    def save(self, *args, **kwargs):
        # Only generate registration number for students
        if self.role == 'student' and not self.registration_number:
            year = timezone.now().year
            count = User.objects.filter(role='student', date_joined__year=year).count() + 1
            self.registration_number = f"MIT-{year}-{str(count).zfill(3)}"
        super().save(*args, **kwargs)

    def __str__(self):
        return self.username
