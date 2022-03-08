Feature: Trello_testi

    Scenario Outline: Delete_attachment
        Given Delete the attachment using the "<id>" you created and assert it

        Examples:
            | id                       |
            | 6227ae7de4e89b7fb267e6b4 |