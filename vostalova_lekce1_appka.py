def calculate_cml():

    weight=float(input("zadej vahu."))
    activity_factor=float(input("zadej UDA"))
    bmr=weight*24.2
    cml=bmr*activity_factor
    cml_rounded = round(cml, 2)
    print("Vase CML je " +str(cml_rounded)+ "kcal/den")

calculate_cml()



