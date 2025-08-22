import hashlib
import itertools
import string

# All supported hashes
targets = {
    "md5":       "faccf5fbece5d95182fae0726ddadd4b",
    "sha1":      "cb7d29f43f4a81ff1f3a1202c80293337faa7a0a",
    "sha224":    "d16f39392e3febe0de8197b1739bf5593a602bee94516ca110caa83a",
    "sha256":    "db87cee52504ca5732bad49ddb1d5b8551c011c1891996d58aacae47f66585ed",
    "sha384":    "72f53e70d7775e1c857d87d3aee7613f8549e97a14dfea6776ee3d46d2322050708c87d967be31271873a114f3f51388",
    "sha512":    "a74465f1b363fb0bb9779e2bc5cb799fed513ecee5a4f654ad2a0acd23a530ed7360838a2a40e823596fd14db36c55a940dfdc184640859aa4d7262a1ab1158b",
    "sha3_224":  "d6728928140c3bd23da8bcdd770cd9815dca6a80dbf02e453543f9a3",
    "sha3_256":  "360f9132948ceeaef729d95f4d462f15abd4b92c80459f770746a2db8d623cec",
    "sha3_384":  "bfc0ef749ff882b458dd7271dc27ead6490f7ee518b43bae500056ec1f1598a934c0aa518e7b235cb22e9f7c73287009",
    "sha3_512":  "7977c676ab995e3e4e810bc0bf7650bf7c9aa0a2590f2df3708fc37a22e0e8980a32eb25cad7966469967d3954dc8e4ca1c81278aabdc061cba3e0609cf21088",
    "blake2b":   "c84ced0ff1fd0f864650621813076ef179cda883875487f8001c6fdb2e8bf6507989c04af1e9cec6dc058f6297bc96b5c1c5d2b3618fc06310508465bb6caa8b",
    "blake2s":   "628190c9d75d5ebe3bf13315eaa735ad6fa6b144e315d3eabdee04306b595929"
}

charset = string.printable.strip()

for guess_tuple in itertools.product(charset, repeat=2):
    guess = ''.join(guess_tuple)
    g_bytes = guess.encode()

    if hashlib.md5(g_bytes).hexdigest() == targets["md5"]:
        print(f"[FOUND] md5 -> {guess}")
    if hashlib.sha1(g_bytes).hexdigest() == targets["sha1"]:
        print(f"[FOUND] sha1 -> {guess}")
    if hashlib.sha224(g_bytes).hexdigest() == targets["sha224"]:
        print(f"[FOUND] sha224 -> {guess}")
    if hashlib.sha256(g_bytes).hexdigest() == targets["sha256"]:
        print(f"[FOUND] sha256 -> {guess}")
    if hashlib.sha384(g_bytes).hexdigest() == targets["sha384"]:
        print(f"[FOUND] sha384 -> {guess}")
    if hashlib.sha512(g_bytes).hexdigest() == targets["sha512"]:
        print(f"[FOUND] sha512 -> {guess}")
    if hashlib.sha3_224(g_bytes).hexdigest() == targets["sha3_224"]:
        print(f"[FOUND] sha3_224 -> {guess}")
    if hashlib.sha3_256(g_bytes).hexdigest() == targets["sha3_256"]:
        print(f"[FOUND] sha3_256 -> {guess}")
    if hashlib.sha3_384(g_bytes).hexdigest() == targets["sha3_384"]:
        print(f"[FOUND] sha3_384 -> {guess}")
    if hashlib.sha3_512(g_bytes).hexdigest() == targets["sha3_512"]:
        print(f"[FOUND] sha3_512 -> {guess}")
    if hashlib.blake2b(g_bytes).hexdigest() == targets["blake2b"]:
        print(f"[FOUND] blake2b -> {guess}")
    if hashlib.blake2s(g_bytes).hexdigest() == targets["blake2s"]:
        print(f"[FOUND] blake2s -> {guess}")
