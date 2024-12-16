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





def salute_and_calculate_density():
    sex = input("Vyberte si (muz/zena): ").lower()

    reference = ""
    body_density = 0

    if sex == "muz":
        reference = "Drahy pane"
        body_density = 1.112 
        greeting_choice = input("Vyberte si preferované oslovení: 'a' (Pane Mistře Muži) nebo 'b' (Klučino): ").lower()
        if greeting_choice == 'a':
            greeting = "Pane Mistře Muži"
        elif greeting_choice == 'b':
            greeting = "Klučino"
        else:
            print("Neplatná volba. Používám jiné oslovení.")
            greeting = "Vážená lidská bytosti"

    elif sex == "zena":

        body_density = 1.097
        # pokračování
        greeting_choice = input("Vyberte si preferované oslovení: 'a' (Vážená paní) nebo 'b' (Vážená slečno): ").lower()
        if greeting_choice == 'a':
            greeting = "Vážená paní"
        elif greeting_choice == 'b':
            greeting = "Vážená slečno"
        else:
            print("Neplatná volba. Používám jiné oslovení.")
            greeting = "Vážená lidská bytosti"

    else:
        greeting = "Drahá kreaturo"
        body_density = (1.1 + 0.98) / 2

    print(f"{greeting}, Vítejte! vaše body density je: {body_density}")

salute_and_calculate_density()




   
