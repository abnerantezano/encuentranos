# Generated by Django 5.0.6 on 2024-05-10 22:37

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('auth', '0012_alter_user_first_name_max_length'),
    ]

    operations = [
        migrations.CreateModel(
            name='TipoUsuario',
            fields=[
                ('id_tipo', models.AutoField(db_column='id_tipo', primary_key=True, serialize=False)),
                ('nombre', models.CharField(db_column='nombre', max_length=60, unique=True)),
            ],
            options={
                'db_table': 'tipo_usuario',
            },
        ),
        migrations.CreateModel(
            name='Usuario',
            fields=[
                ('password', models.CharField(max_length=128, verbose_name='password')),
                ('last_login', models.DateTimeField(blank=True, null=True, verbose_name='last login')),
                ('is_superuser', models.BooleanField(default=False, help_text='Designates that this user has all permissions without explicitly assigning them.', verbose_name='superuser status')),
                ('id_usuario', models.AutoField(db_column='id_usuario', primary_key=True, serialize=False)),
                ('correo', models.CharField(db_column='correo', max_length=150, unique=True)),
                ('contrasena', models.CharField(db_column='contrasena', max_length=255)),
                ('groups', models.ManyToManyField(blank=True, help_text='The groups this user belongs to. A user will get all permissions granted to each of their groups.', related_name='user_set', related_query_name='user', to='auth.group', verbose_name='groups')),
                ('user_permissions', models.ManyToManyField(blank=True, help_text='Specific permissions for this user.', related_name='user_set', related_query_name='user', to='auth.permission', verbose_name='user permissions')),
                ('id_tipo', models.ForeignKey(db_column='id_tipo', on_delete=django.db.models.deletion.CASCADE, to='gestion_usuarios.tipousuario')),
            ],
            options={
                'db_table': 'usuario',
                'indexes': [models.Index(fields=['id_tipo', 'correo'], name='usuario_id_tipo_4c499a_idx')],
            },
        ),
    ]
