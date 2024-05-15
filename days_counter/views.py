from django.shortcuts import render
import datetime

# Create your views here.
def view_index(request):
    if(request.POST.get('birthday') and int(request.POST.get('life_expectancy')) != 0):
        birthday = datetime.date.fromisoformat(request.POST.get('birthday'))
        life_expectancy = int(request.POST.get('life_expectancy')) 
        today = datetime.date.today()
        last_date = birthday + datetime.timedelta(days=(life_expectancy * 365))
        total_days = (last_date - birthday).days

        days_lived = (today - birthday).days 
        days_avaliable = (last_date - today).days
        days_lived_percentage = round(days_lived * 100 / total_days, 2) 
        days_left_percentage = round(days_avaliable * 100 / total_days, 2)
        return render(request, 'index.html', context={'days_lived':days_lived, 'days_avaliable': days_avaliable, 'total_days':total_days, 'days_lived_percentage':days_lived_percentage, 'days_left_percentage':days_left_percentage, 'last_date': last_date, 'birthday':birthday.isoformat(), 'life_expectancy':life_expectancy})
    else:
        return render(request, 'index.html', context={'no_data':True})
