Feature: Trello_testi

    Scenario Outline: Archive/Unarchive_list
        Given Archive the list using the "<id>" you created and assert it

        Examples:
            | id                       |
            | 6227a20dea112c3710872062 |