from random import choice


def notIn(s, w: str):
    for c in w:
        if c in s.lower():
            return False
    return True

def rightPos(s, charPos):
    for char in charPos:
        char, pos = char[0], char[1]
        if char not in s:
            return False
        pos = int(pos)
        if s[pos] != char: 
            return False
    return True
    

def wrongPos(s, charPos):
    for char_ in charPos:
        char, posList = char_[0], char_[1:]
        
        if char not in s:
            return False
        
        for pos in posList:
            pos = int(pos)
            if s[pos] == char: 
                return False
            
    return True
   
   
def main():
    with open('words.txt') as f:
        words = f.read().splitlines()

    chars = ''
    wrongPosList = []
    rightPosList = []

    for _ in range(5):
        charInput = input("UNUSED CHARS:\n").lower()
        chars += charInput
        
        wrongPosListInput = input("WRONG POS:\n").split(',')
        wrongPosListInput = [f'{x}' for x in wrongPosListInput if x != '']
        wrongPosList += wrongPosListInput
        
        rightPosListInput = input("RIGHT POS:\n").split(',')
        rightPosListInput = [f'{x}' for x in rightPosListInput if x != '']
        rightPosList += rightPosListInput
        
        words = list(filter(lambda x: (
            notIn(x, chars) and 
            wrongPos(x, wrongPosList) and
            rightPos(x, rightPosList) and
            x
            ) , words))
        
        word = choice(words)
        print(word)
        if len(words) == 1:
            break
        
if __name__ == "__main__":
    main()