const { Ed25519KeyPair } = require('crypto-ld');
const { documentLoader } = require('jsonld');


// Test에 필요한 사안 >> 1. jest 설치 2. await 사용을 위해 regenerator-runtime 패키지 설치
// 1. npm install --save-dev jest 2. npm install --save-dev babel-jest @babel/core @babel/preset-env

// DID와 관련된 정보
const did = 'did:example:123';
const issuer = 'did:example:123';
const issuanceDate = '2022-01-01T00:00:00Z';
const subject = {
  id: 'https://example.com/jdoe',
  name: 'John Doe'
};

// VC 문서 생성
const vc = {
  '@context': ['https://www.w3.org/2018/credentials/v1'],
  type: 'VerifiableCredential',
  issuer: {
    id: issuer,
    name: 'Example Organization'
  },
  issuanceDate: issuanceDate,
  credentialSubject: subject
};

// 비밀키 생성
async function generateKeyPair(){
  const keyPair = await Ed25519KeyPair.generate();
  const privateKey = keyPair.privateKeyBase58;
}
(async () => {
  generateKeyPair();
}) ();

// VC 문서에 서명
const suite = new Ed25519Signature2018({
  key: privateKey,
  date: issuanceDate,
  signatureType: 'Ed25519Signature2018'
});
// const proof = await vc.issue({
//   suite,
//   documentLoader,
//   compactProof: false
// });

// 서명 정보 추가
vc.proof = proof;

// VC 문서 출력
console.log(vc);