from django.contrib import admin
from django.contrib.auth.admin import UserAdmin as BaseUserAdmin
from .models import User

class UserAdmin(BaseUserAdmin):
    # Fields to display in list view
    list_display = ('username', 'email', 'role', 'registration_number', 'is_staff', 'is_superuser')
    list_filter = ('role', 'is_staff', 'is_superuser')

    # Fields to edit in the admin form
    fieldsets = (
        (None, {'fields': ('username', 'password')}),
        ('Personal info', {'fields': ('first_name', 'last_name', 'email')}),
        ('Role & Registration', {'fields': ('role', 'registration_number')}),
        ('Permissions', {'fields': ('is_active', 'is_staff', 'is_superuser', 'groups', 'user_permissions')}),
        ('Important dates', {'fields': ('last_login', 'date_joined')}),
    )

    # Fields to show when creating a new user in admin
    add_fieldsets = (
        (None, {
            'classes': ('wide',),
            'fields': ('username', 'email', 'password1', 'password2', 'role'),
        }),
    )

    search_fields = ('username', 'email', 'registration_number')
    ordering = ('username',)

    readonly_fields = ('registration_number',)  # Prevent editing reg number

# Register the custom User model
admin.site.register(User, UserAdmin)
