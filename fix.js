function writeFix(p, addr) {
	p.write4(addr.add32(0x00000000), 0x00000be9);
	p.write4(addr.add32(0x00000004), 0x90909000);
	p.write4(addr.add32(0x00000008), 0x90909090);
	p.write4(addr.add32(0x0000000c), 0x90909090);
	p.write4(addr.add32(0x00000010), 0x0082b955);
	p.write4(addr.add32(0x00000014), 0x8948c000);
	p.write4(addr.add32(0x00000018), 0x415741e5);
	p.write4(addr.add32(0x0000001c), 0x41554156);
	p.write4(addr.add32(0x00000020), 0x83485354);
	p.write4(addr.add32(0x00000024), 0x320f18ec);
	p.write4(addr.add32(0x00000028), 0x89d58949);
	p.write4(addr.add32(0x0000002c), 0x64b948c0);
	p.write4(addr.add32(0x00000030), 0x77737069);
	p.write4(addr.add32(0x00000034), 0x49000000);
	p.write4(addr.add32(0x00000038), 0x4120e5c1);
	p.write4(addr.add32(0x0000003c), 0x000200bc);
	p.write4(addr.add32(0x00000040), 0xc5094900);
	p.write4(addr.add32(0x00000044), 0xd0b58d4d);
	p.write4(addr.add32(0x00000048), 0x49ffcf14);
	p.write4(addr.add32(0x0000004c), 0x8a509d8d);
	p.write4(addr.add32(0x00000050), 0x81490003);
	p.write4(addr.add32(0x00000054), 0x030b50c5);
	p.write4(addr.add32(0x00000058), 0x868d4901);
	p.write4(addr.add32(0x0000005c), 0x001d18d0);
	p.write4(addr.add32(0x00000060), 0x00c68149);
	p.write4(addr.add32(0x00000064), 0x48001d17);
	p.write4(addr.add32(0x00000068), 0x48c04589);
	p.write4(addr.add32(0x0000006c), 0xad0000a1);
	p.write4(addr.add32(0x00000070), 0x000000de);
	p.write4(addr.add32(0x00000074), 0x45894800);
	p.write4(addr.add32(0x00000078), 0x888948c8);
	p.write4(addr.add32(0x0000007c), 0x000000e0);
	p.write4(addr.add32(0x00000080), 0xf080c748);
	p.write4(addr.add32(0x00000084), 0x00000000);
	p.write4(addr.add32(0x00000088), 0x48000000);
	p.write4(addr.add32(0x0000008c), 0x00f880c7);
	p.write4(addr.add32(0x00000090), 0x00000000);
	p.write4(addr.add32(0x00000094), 0x1aeb0000);
	p.write4(addr.add32(0x00000098), 0x00841f0f);
	p.write4(addr.add32(0x0000009c), 0x00000000);
	p.write4(addr.add32(0x000000a0), 0x4cee894c);
	p.write4(addr.add32(0x000000a4), 0x8b48ff89);
	p.write4(addr.add32(0x000000a8), 0xd0ffc045);
	p.write4(addr.add32(0x000000ac), 0x01ec8341);
	p.write4(addr.add32(0x000000b0), 0x02ba2774);
	p.write4(addr.add32(0x000000b4), 0x4c000000);
	p.write4(addr.add32(0x000000b8), 0x80bfee89);
	p.write4(addr.add32(0x000000bc), 0x41000001);
	p.write4(addr.add32(0x000000c0), 0x8d48d6ff);
	p.write4(addr.add32(0x000000c4), 0x00006f3d);
	p.write4(addr.add32(0x000000c8), 0xc7894900);
	p.write4(addr.add32(0x000000cc), 0x31c68948);
	p.write4(addr.add32(0x000000d0), 0x4cd3ffc0);
	p.write4(addr.add32(0x000000d4), 0x75c87d39);
	p.write4(addr.add32(0x000000d8), 0xe43145c7);
	p.write4(addr.add32(0x000000dc), 0xc8758b48);
	p.write4(addr.add32(0x000000e0), 0x5f3d8d48);
	p.write4(addr.add32(0x000000e4), 0x31000000);
	p.write4(addr.add32(0x000000e8), 0x0fd3ffc0);
	p.write4(addr.add32(0x000000ec), 0x0000441f);
	p.write4(addr.add32(0x000000f0), 0x0000a148);
	p.write4(addr.add32(0x000000f4), 0x0000dead);
	p.write4(addr.add32(0x000000f8), 0x89440000);
	p.write4(addr.add32(0x000000fc), 0x3d8d48e6);
	p.write4(addr.add32(0x00000100), 0x0000005c);
	p.write4(addr.add32(0x00000104), 0x20148b4a);
	p.write4(addr.add32(0x00000108), 0x08c48349);
	p.write4(addr.add32(0x0000010c), 0xd3ffc031);
	p.write4(addr.add32(0x00000110), 0x80fc8149);
	p.write4(addr.add32(0x00000114), 0x75000001);
	p.write4(addr.add32(0x00000118), 0x3d8d48d7);
	p.write4(addr.add32(0x0000011c), 0x00000060);
	p.write4(addr.add32(0x00000120), 0xd3ffc031);
	p.write4(addr.add32(0x00000124), 0x18c48348);
	p.write4(addr.add32(0x00000128), 0x415bc031);
	p.write4(addr.add32(0x0000012c), 0x415d415c);
	p.write4(addr.add32(0x00000130), 0x5d5f415e);
	p.write4(addr.add32(0x00000134), 0x909090c3);
	p.write4(addr.add32(0x00000138), 0x6f6c6c41);
	p.write4(addr.add32(0x0000013c), 0x30203a63);
	p.write4(addr.add32(0x00000140), 0x786c2578);
	p.write4(addr.add32(0x00000144), 0x624f000a);
	p.write4(addr.add32(0x00000148), 0x7463656a);
	p.write4(addr.add32(0x0000014c), 0x6d754420);
	p.write4(addr.add32(0x00000150), 0x78302070);
	p.write4(addr.add32(0x00000154), 0x0a786c25);
	p.write4(addr.add32(0x00000158), 0x00000000);
	p.write4(addr.add32(0x0000015c), 0x00000000);
	p.write4(addr.add32(0x00000160), 0x6265443c);
	p.write4(addr.add32(0x00000164), 0x203e6775);
	p.write4(addr.add32(0x00000168), 0x656a624f);
	p.write4(addr.add32(0x0000016c), 0x2b207463);
	p.write4(addr.add32(0x00000170), 0x25783020);
	p.write4(addr.add32(0x00000174), 0x3a783330);
	p.write4(addr.add32(0x00000178), 0x25783020);
	p.write4(addr.add32(0x0000017c), 0x000a786c);
	p.write4(addr.add32(0x00000180), 0x6265443c);
	p.write4(addr.add32(0x00000184), 0x203e6775);
	p.write4(addr.add32(0x00000188), 0x7473754a);
	p.write4(addr.add32(0x0000018c), 0x726f4620);
	p.write4(addr.add32(0x00000190), 0x7468203a);
	p.write4(addr.add32(0x00000194), 0x3a737074);
	p.write4(addr.add32(0x00000198), 0x77772f2f);
	p.write4(addr.add32(0x0000019c), 0x6f792e77);
	p.write4(addr.add32(0x000001a0), 0x62757475);
	p.write4(addr.add32(0x000001a4), 0x6f632e65);
	p.write4(addr.add32(0x000001a8), 0x61772f6d);
	p.write4(addr.add32(0x000001ac), 0x3f686374);
	p.write4(addr.add32(0x000001b0), 0x4a563d76);
	p.write4(addr.add32(0x000001b4), 0x6d6c5247);
	p.write4(addr.add32(0x000001b8), 0x4c6c6133);
	p.write4(addr.add32(0x000001bc), 0x00000a59);
}