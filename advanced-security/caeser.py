# Caesar cipher tool for decrypting a cipher

def getCipher():
    print('Enter ciphertext: ')
    return raw_input()

def getKey():
    # key set to negative one so the user cannot accidently skip input
    key = -1
    while True:
        print('Enter the key you wish to use (1-26)')
        key = int(raw_input())
        if (key >= 0 and key <= 26):
            return key

def getPlainText():
    cipher = getCipher()
    key = getKey()

    # since we are decrypting we want the keys negative value
    key = -key
    plaintext = ''

    # for each letter in the ciphertext
    for letter in cipher:
        # checks if the string contains only characters in the alphabet
        if letter.isalpha():
            num = ord(letter)
            num += key
            # is the letter uppercase
            if letter.isupper():
                # Ensure the character remains within the ASCII range of letters
                if num > ord('Z'):
                    num -= 26
                elif num < ord('A'):
                    num += 26
            # is the letter lowercase
            elif letter.islower():
                # Ensure the character remains within the ASCII range of letters
                if num > ord('z'):
                    num -= 26
                elif num < ord('a'):
                    num += 26

            # concatenate the character onto the plaintext
            plaintext += chr(num)
        else:
            plaintext += letter
    print('The plaintext is: ')
    print(plaintext)

print(getPlainText())
