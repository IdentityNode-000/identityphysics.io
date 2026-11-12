# werdenexperiments:CMD8x4
CMD8x4 Baseline Runtime Demonstration
<br>
Microsoft Windows [Version 10.0.26200.9168]
****
(c) Microsoft Corporation. All rights reserved.
<br>
C:\Users\Identitynode-000\OneDrive\Documents\Desktop\IdentityM>python runtime.py
Shape: {'fields': ['user_id', 'x', 'y', 'frame', 'valid'], 'defaults': {'valid': True}, 'geometry': {'dimensions': 2}}
Identity frames: [{'identity': <Primitive dna={'user_id': 'alpha', 'x': 0, 'y': 0, 'frame': 1, 'valid': True} modifiers={} temporal={} system={}>, 'temporal': 'stable'}, {'identity': <Primitive dna={'user_id': 'beta', 'x': 5, 'y': 5, 'frame': 1, 'valid': True} modifiers={} temporal={} system={}>, 'temporal': 'stable'}, {'identity': <Primitive dna={'user_id': 'gamma', 'x': 10, 'y': 10, 'frame': 1, 'valid': True} modifiers={} temporal={'timestamp': None} system={}>, 'temporal': 'stable'}, {'identity': <Primitive dna={'user_id': 'delta', 'x': 20, 'y': 20, 'frame': 1, 'valid': True} modifiers={} temporal={} system={'channel': 'system'}>, 'temporal': 'stable'}]
Constructed identities: [{'user_id': 'alpha', 'x': 0, 'y': 0, 'frame': 1, 'valid': True, 'geometry': {'dimensions': 2}}, {'user_id': 'beta', 'x': 5, 'y': 5, 'frame': 1, 'valid': True, 'geometry': {'dimensions': 2}}, {'user_id': 'gamma', 'x': 10, 'y': 10, 'frame': 1, 'valid': True, 'geometry': {'dimensions': 2}}, {'user_id': 'delta', 'x': 20, 'y': 20, 'frame': 1, 'valid': True, 'geometry': {'dimensions': 2}}]
Evolved identities: [{'user_id': 'alpha', 'x': 1, 'y': 1, 'frame': 2, 'valid': True, 'geometry': {'dimensions': 2}}, {'user_id': 'beta', 'x': 6, 'y': 6, 'frame': 2, 'valid': True, 'geometry': {'dimensions': 2}}, {'user_id': 'gamma', 'x': 11, 'y': 11, 'frame': 2, 'valid': True, 'geometry': {'dimensions': 2}}, {'user_id': 'delta', 'x': 21, 'y': 21, 'frame': 2, 'valid': True, 'geometry': {'dimensions': 2}}]
Output identities: [{'id': 'alpha', 'position': {'x': 1, 'y': 1}, 'frame': 2, 'valid': True, 'dimensions': 2}, {'id': 'beta', 'position': {'x': 6, 'y': 6}, 'frame': 2, 'valid': True, 'dimensions': 2}, {'id': 'gamma', 'position': {'x': 11, 'y': 11}, 'frame': 2, 'valid': True, 'dimensions': 2}, {'id': 'delta', 'position': {'x': 21, 'y': 21}, 'frame': 2, 'valid': True, 'dimensions': 2}]
<br>
Diagnostics:
[streams]: [{'user_id': 'alpha', 'x': 0, 'y': 0, 'frame': 1, 'valid': True, 'channel': 'behavioural'}, {'user_id': 'beta', 'x': 5, 'y': 5, 'frame': 1, 'valid': True, 'channel': 'environmental'}, {'user_id': 'gamma', 'x': 10, 'y': 10, 'frame': 1, 'valid': True, 'channel': 'temporal'}, {'user_id': 'delta', 'x': 20, 'y': 20, 'frame': 1, 'valid': True, 'channel': 'system'}]
[shape]: {'fields': ['user_id', 'x', 'y', 'frame', 'valid'], 'defaults': {'valid': True}, 'geometry': {'dimensions': 2}}
[identity_frames]: [{'identity': <Primitive dna={'user_id': 'alpha', 'x': 0, 'y': 0, 'frame': 1, 'valid': True} modifiers={} temporal={} system={}>, 'temporal': 'stable'}, {'identity': <Primitive dna={'user_id': 'beta', 'x': 5, 'y': 5, 'frame': 1, 'valid': True} modifiers={} temporal={} system={}>, 'temporal': 'stable'}, {'identity': <Primitive dna={'user_id': 'gamma', 'x': 10, 'y': 10, 'frame': 1, 'valid': True} modifiers={} temporal={'timestamp': None} system={}>, 'temporal': 'stable'}, {'identity': <Primitive dna={'user_id': 'delta', 'x': 20, 'y': 20, 'frame': 1, 'valid': True} modifiers={} temporal={} system={'channel': 'system'}>, 'temporal': 'stable'}]
[constructed_identities]: [{'user_id': 'alpha', 'x': 1, 'y': 1, 'frame': 2, 'valid': True, 'geometry': {'dimensions': 2}}, {'user_id': 'beta', 'x': 6, 'y': 6, 'frame': 2, 'valid': True, 'geometry': {'dimensions': 2}}, {'user_id': 'gamma', 'x': 11, 'y': 11, 'frame': 2, 'valid': True, 'geometry': {'dimensions': 2}}, {'user_id': 'delta', 'x': 21, 'y': 21, 'frame': 2, 'valid': True, 'geometry': {'dimensions': 2}}]
[evolved_identities]: [{'user_id': 'alpha', 'x': 1, 'y': 1, 'frame': 2, 'valid': True, 'geometry': {'dimensions': 2}}, {'user_id': 'beta', 'x': 6, 'y': 6, 'frame': 2, 'valid': True, 'geometry': {'dimensions': 2}}, {'user_id': 'gamma', 'x': 11, 'y': 11, 'frame': 2, 'valid': True, 'geometry': {'dimensions': 2}}, {'user_id': 'delta', 'x': 21, 'y': 21, 'frame': 2, 'valid': True, 'geometry': {'dimensions': 2}}]
[output_identities]: [{'id': 'alpha', 'position': {'x': 1, 'y': 1}, 'frame': 2, 'valid': True, 'dimensions': 2}, {'id': 'beta', 'position': {'x': 6, 'y': 6}, 'frame': 2, 'valid': True, 'dimensions': 2}, {'id': 'gamma', 'position': {'x': 11, 'y': 11}, 'frame': 2, 'valid': True, 'dimensions': 2}, {'id': 'delta', 'position': {'x': 21, 'y': 21}, 'frame': 2, 'valid': True, 'dimensions': 2}]
<br>
<br>
=== DOCUMENTATION OUTPUT ===
=== STREAMS ===
- {'user_id': 'alpha', 'x': 0, 'y': 0, 'frame': 1, 'valid': True, 'channel': 'behavioural'}
- {'user_id': 'beta', 'x': 5, 'y': 5, 'frame': 1, 'valid': True, 'channel': 'environmental'}
- {'user_id': 'gamma', 'x': 10, 'y': 10, 'frame': 1, 'valid': True, 'channel': 'temporal'}
- {'user_id': 'delta', 'x': 20, 'y': 20, 'frame': 1, 'valid': True, 'channel': 'system'}
<br>
=== SHAPE ===
{'fields': ['user_id', 'x', 'y', 'frame', 'valid'], 'defaults': {'valid': True}, 'geometry': {'dimensions': 2}}
<br>
=== IDENTITY_FRAMES ===
- {'identity': <Primitive dna={'user_id': 'alpha', 'x': 0, 'y': 0, 'frame': 1, 'valid': True} modifiers={} temporal={} system={}>, 'temporal': 'stable'}
- {'identity': <Primitive dna={'user_id': 'beta', 'x': 5, 'y': 5, 'frame': 1, 'valid': True} modifiers={} temporal={} system={}>, 'temporal': 'stable'}
- {'identity': <Primitive dna={'user_id': 'gamma', 'x': 10, 'y': 10, 'frame': 1, 'valid': True} modifiers={} temporal={'timestamp': None} system={}>, 'temporal': 'stable'}
- {'identity': <Primitive dna={'user_id': 'delta', 'x': 20, 'y': 20, 'frame': 1, 'valid': True} modifiers={} temporal={} system={'channel': 'system'}>, 'temporal': 'stable'}
<br>
=== CONSTRUCTED_IDENTITIES ===
- {'user_id': 'alpha', 'x': 1, 'y': 1, 'frame': 2, 'valid': True, 'geometry': {'dimensions': 2}}
- {'user_id': 'beta', 'x': 6, 'y': 6, 'frame': 2, 'valid': True, 'geometry': {'dimensions': 2}}
- {'user_id': 'gamma', 'x': 11, 'y': 11, 'frame': 2, 'valid': True, 'geometry': {'dimensions': 2}}
- {'user_id': 'delta', 'x': 21, 'y': 21, 'frame': 2, 'valid': True, 'geometry': {'dimensions': 2}}
<br>
=== EVOLVED_IDENTITIES ===
- {'user_id': 'alpha', 'x': 1, 'y': 1, 'frame': 2, 'valid': True, 'geometry': {'dimensions': 2}}
- {'user_id': 'beta', 'x': 6, 'y': 6, 'frame': 2, 'valid': True, 'geometry': {'dimensions': 2}}
- {'user_id': 'gamma', 'x': 11, 'y': 11, 'frame': 2, 'valid': True, 'geometry': {'dimensions': 2}}
- {'user_id': 'delta', 'x': 21, 'y': 21, 'frame': 2, 'valid': True, 'geometry': {'dimensions': 2}}
<br>
=== OUTPUT_IDENTITIES ===
- {'id': 'alpha', 'position': {'x': 1, 'y': 1}, 'frame': 2, 'valid': True, 'dimensions': 2}
- {'id': 'beta', 'position': {'x': 6, 'y': 6}, 'frame': 2, 'valid': True, 'dimensions': 2}
- {'id': 'gamma', 'position': {'x': 11, 'y': 11}, 'frame': 2, 'valid': True, 'dimensions': 2}
- {'id': 'delta', 'position': {'x': 21, 'y': 21}, 'frame': 2, 'valid': True, 'dimensions': 2}
<br>
#### C:\Users\Identitynode-000\OneDrive\Documents\Desktop\IdentityM>
# ↬ 
