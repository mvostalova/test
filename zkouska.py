def calculate_cml():
    try:
        weight = float(input("Zadej vahu (napr. 75.5): "))
    except ValueError:
        print("Chyba: Vaha musi byt cislo v desetinne forme s teckou znacici tesetinnou carku (napr. 75.5).")
        return  # Zastavi funkci, pokud je chyba ve vstupu

    try:
        activity_factor = float(input("Zadej UDA (napr. 1.2): "))
    except ValueError:
        print("Chyba: UDA musi byt cislo v desetinne forme s teckou znacici tesetinnou carku. uz zase, pookie, achich ouvej (napr. 1.2).")
        return  # Zastavi funkci, pokud je chyba ve vstupu

    bmr = weight * 24.2
    cml = bmr * activity_factor
    cml_rounded = round(cml, 2)
    print("Vase CML je " + str(cml_rounded) + " kcal/den, broucci.")

calculate_cml()
