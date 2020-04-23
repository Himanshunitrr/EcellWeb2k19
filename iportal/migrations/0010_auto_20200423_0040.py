# Generated by Django 2.2.2 on 2020-04-22 19:10

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('iportal', '0009_auto_20200422_1452'),
    ]

    operations = [
        migrations.AlterField(
            model_name='startup',
            name='branch',
            field=models.CharField(choices=[('Biomed', 'Bio Medical Engineering'), ('Biotech', 'Bio Technology Engineering'), ('Chemical', 'Chemical Engineering'), ('Civil', 'Civil Engineering'), ('CSE', 'Computer Science Engineering'), ('ELEX', 'Electronics and communication Engineering'), ('Electrical', 'Electrical Engineering'), ('IT', 'Information Technology'), ('Mech', 'Mechanical Engineering'), ('Meta', 'Metallurgical and Materials Engineering'), ('Mining', 'Mining Engineering'), ('Finance', 'Finance'), ('Marketing', 'Marketing'), ('HRM', 'Human Recourse Management'), ('IB', 'International Business'), ('OM', 'Operation Management'), ('SCM', 'Supply Chain Management'), ('RM', 'Rural Management'), ('ABM', 'Agri Business Management'), ('HCM', 'Health Care Management'), ('LA', 'Landscape Architecture'), ('AC', 'Architectural Conservation'), ('HA', 'Housing Architecture'), ('UP', 'Urban Planning'), ('RP', 'Regional Planning'), ('HM', 'Hotel Management'), ('AS', 'Aernautical Science'), ('Medical', 'Medical Science'), ('Biology', 'Biologcal Science'), ('AVE', 'Animation and Visual Effects'), ('Chemistry', 'Applied Chemistry'), ('Maths', 'Applied Mathemartics'), ('Physics', 'Applied Physics'), ('Other', 'Other')], default='CSE', max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='startup',
            name='course',
            field=models.CharField(choices=[('B Tech', 'Bachelor of Technology'), ('M Tech', 'Master of Technology'), ('MBA', 'Master of Business Administration'), ('B Sc', 'Bachelor of Science'), ('B Arch', 'Bachelor of Architecture'), ('Other', 'Other')], default='B Tech', max_length=100, null=True),
        ),
        migrations.AlterField(
            model_name='startup',
            name='semester',
            field=models.PositiveIntegerField(default=2, null=True),
        ),
    ]
