# KATA DESCRIPTION

Build Tower
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]

# POMODORO 1
 
✅ - Piramide blocks are represented by "*"
        ✅ ["*"] --> true
        ✅ ["."] --> false
        ✅ ["$"] --> false

✅ - Piramide contains positive integer that represents a floor
       ✅ nFloor = 1 --> true
       ✅ nFloor = 3 --> true
       ✅ nFloor = 0 --> false
       ✅ nFloor = -1 --> false


# POMODORO 2

✅ - Calculate how many blocks are used for a single floor 
        ✅ nFloor: 1 ---> 1
        ✅ nFloor: 3 ---> 6
        ✅ nFloor: 6 ---> 11
✅ - Calculated the total amount of used blocks for all floors (nFloor)
        ✅ nFloor: 1 ---> 1
        ✅ nFloor: 3 ---> 9
        ✅ nFloor: 6 ---> 36

✅ - Modify describe test 


# POMODORO 3

Center the building blocks (left and right spacing are equal)
     nFloor: 3 ---> [
                        "  *  ",
                        " *** ", 
                        "*****"
                       ]

     nFloor: 6 ---> [
                        "     *     ", 
                        "    ***    ", 
                        "   *****   ", 
                        "  *******  ", 
                        " ********* ", 
                        "***********"
                        ]

# POMODORO 4
✅ Build the tower with the * blocks
 ✅ nFloor: 3 ---> [
                "*",
                "***", 
                "*****"
                ]

 ✅ nFloor: 6 ---> [
                "*", 
                "***", 
                "*****", 
                "*******", 
                "*********", 
                "***********"
                ]

Center the building blocks (left and right spacing are equal)
     nFloor: 3 ---> [
                        "  *  ",
                        " *** ", 
                        "*****"
                       ]

     nFloor: 6 ---> [
                        "     *     ", 
                        "    ***    ", 
                        "   *****   ", 
                        "  *******  ", 
                        " ********* ", 
                        "***********"
                        ]

# POMODORO 5
✅ Center the building blocks (left and right spacing are equal)
     ✅ nFloor: 3 ---> [
                        "  *  ",
                        " *** ", 
                        "*****"
                    ]

     ✅ nFloor: 6 ---> [
                        "     *     ", 
                        "    ***    ", 
                        "   *****   ", 
                        "  *******  ", 
                        " ********* ", 
                        "***********"
                    ]

- Test endProduct 
  -   nFloor: 3 ---> [
                        "  *  ",
                        " *** ", 
                        "*****"
                    ]

     nFloor: 6 ---> [
                        "     *     ", 
                        "    ***    ", 
                        "   *****   ", 
                        "  *******  ", 
                        " ********* ", 
                        "***********"
                    ]

✅ - Modify drawPattern function that you provide symbol type as parameter
  ✅ - symbol: $ ---> []
  
✅ - Code coverage 100%
  ✅ - nFloor: 0 ---> []

                        