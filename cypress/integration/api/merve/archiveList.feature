Feature: Trello_testi

    Scenario Outline: Archive/Unarchive_list
        Given Archive the list using the "<id>" you created and assert it

        Examples:
            | id                       |
            | 622cf66ae691870f5622e1ee |