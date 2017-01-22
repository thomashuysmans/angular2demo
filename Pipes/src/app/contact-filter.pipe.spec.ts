import { ContactFilterPipe } from './contact-filter.pipe';


export function main(){
    describe('Pipe: ContactFilter', ()=> {

        let contactFilter: ContactFilterPipe;

        beforeEach(() => {
            contactFilter = new ContactFilterPipe();
        })

        it('should say hello jan', () => {
            let result = contactFilter.transform("jan");

            expect(result).toBe("Hello jan");
        });
    })
}