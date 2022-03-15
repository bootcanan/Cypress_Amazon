Feature: Trello_testi

    Scenario Outline: Delete_board
        Given Delete the board using the "<id>" "<key>" and "<token>" you created and assert it

        Examples:
            | id                       | key                              | token                                                            |
            | 6223c2402dfaa56742a09b0f | a0b69b889fdfd0fda0e2acd057589255 | 93e0fa67c3cd67a91cc2491dfdee5eda860c76e49b1ba62d24db071ae2251b7a |