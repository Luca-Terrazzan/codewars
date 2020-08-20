import unittest
from disenvowel import disemvowel

class TestDisenvowel(unittest.TestCase):
    def test_some_tests(self):
        word_with_vowels = 'some word to disenvowel'
        word_without_vowels = 'sm wrd t dsnvwl'

        self.assertEqual(word_without_vowels, disemvowel(word_with_vowels))

    def test_empty_word(self):
        empty_word = ''

        self.assertEqual(empty_word, disemvowel(empty_word))

if __name__ == '__main__':
    unittest.main()
