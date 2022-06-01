import { expect } from "chai";
import { currentUser } from '../shared_data/credentialsHandler'
describe('Initial suite that contains a few tests', function () {

  it('Test 1', function () {
    const mockObject = {
      name : "Diego",
      lastname : "Montoya"
    }
    expect( mockObject.name ).to.equal( "Diego" );
    expect( currentUser.username ).not.null;
    expect( currentUser.password ).not.null;
  });

  it('Test 2', function () {
    const mockObject = {
      name : "Diego",
      lastname : "Montoya"
    }
    expect( mockObject.name ).to.equal( "Diego" );
  });
});
