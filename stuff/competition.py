nricNumber = input("Please enter your NRIC number: ")
def nricChecker(nricNumber):
    nric = nricNumber.upper().strip()
    FG = ['X','W','U','T','R','Q','P','N','M','L','K']
    ST= ['J','Z','I','H','G','F','E','D','C','B','A']
    if len(nric) != 9:
        print("Your NRIC number is incorrect (wrong length).")
        return False
    if not nric[1:8].isdigit():
        print( "your NRIC number is incorrect")
        return False
    sum = (int(nric[1])*2) + (int(nric[2])*7) + (int(nric[3])*6) + (int(nric[4])*5) + (int(nric[5])*4) + (int(nric[6])*3) + (int(nric[7])*2)
    if nric[0] == "G" or nric[0]== "T":
        sum +=4
    remainder = sum %11
    if nric[0] == "F" or nric[0]== "G":
        if nric[8] == FG[remainder]:
            return True
    elif nric[0] == "S" or nric[0]== "T":
        if nric[8]== ST[remainder]:
            return True   
    else:
        print("Please enter your correct NRIC number")
        return False
print(nricChecker(nricNumber))