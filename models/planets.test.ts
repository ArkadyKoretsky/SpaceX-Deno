import {
  assertEquals,
  assertNotEquals,
} from 'https://deno.land/std@0.68.0/testing/asserts.ts';

Deno.test('short example test', () => {
  assertEquals('deno', 'deno');
  assertNotEquals({ runtime: 'deno' }, { runtime: 'node' });
});

Deno.test({
  name: 'example test',
  ignore: Deno.build.os === 'windows',
  fn() {
    assertEquals('deno', 'deno');
    assertNotEquals({ runtime: 'deno' }, { runtime: 'node' });
  },
});
