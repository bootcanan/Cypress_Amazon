Feature: Trello_testi

    Scenario Outline: Delete_board
        Given Delete the board using the "<id>" you created and assert it

        Examples:
            | id                       |
            | 6227a04a369ce87fd746d997 |