from random import randint, randrange

def daily_squat_challenge():
    now_squats = randint(1, 10)
    print(f"Musis TED HNED udelat {now_squats} drepu!")
    
    
    later_squats = randrange(20, 101, 10)
    print(f"Musis JESTE DNES udelat {later_squats} drepu!")

def calculate_cml():
    try:
        weight = float(input("Zadej vahu (napr. 75.5): "))
    except ValueError:
        print("Chyba: Vaha musi byt cislo v desetinne forme (napr. 75.5).")
        weight = float(input("Zadej vahu (napr. 75.5): "))

        return  

    try:
        activity_factor = float(input("Zadej UDA (napr. 1.2): "))
    except ValueError:
        print("Chyba: UDA musi byt cislo v desetinne forme (napr. 1.2).")
        return  

    bmr = weight * 24.2
    cml = bmr * activity_factor
    cml_rounded = round(cml, 2)
    print("Vase CML je " + str(cml_rounded) + " kcal/den")


daily_squat_challenge()
calculate_cml()

