import { createClient } from "@/utils/supabase/server";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Table, TableHeader, TableRow, TableHead, TableBody, TableCell } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function JobBoard() {
  const canInitSupabaseClient = () => {
    
    try {
      createClient();
      return true;
    } catch (e) {
      return false;
    }
  };

  const isSupabaseConnected = canInitSupabaseClient();
  return (
    <div className="flex min-h-screen w-full bg-gradient-to-br from-[#f0f0f0] to-[#e0e0e0]">
      <div className="flex flex-col items-center gap-6 border-r bg-white p-6 shadow-lg sm:w-64 sm:gap-8 sm:p-8">
        <div className="flex flex-col items-center gap-2">
          <Avatar className="h-20 w-20 border-2 border-primary">
            <AvatarImage src="/placeholder-user.jpg" alt="@shadcn" />
            <AvatarFallback>AC</AvatarFallback>
          </Avatar>
          <div className="text-center">
            <div className="text-lg font-semibold text-[#333]">Amelia Cooper</div>
            <div className="text-sm text-[#666]">Software Engineer</div>
          </div>
        </div>
        <div className="space-y-2 text-sm text-[#666]">
          <div>
            <span className="font-medium">Email:</span> amelia@example.com
          </div>
          <div>
            <span className="font-medium">Phone:</span> (123) 456-7890
          </div>
          <div>
            <span className="font-medium">College:</span> University of California, Berkeley
          </div>
          <div>
            <span className="font-medium">Current Employer:</span> Acme Inc.
          </div>
        </div>
      </div>
      <div className="flex-1 p-6 sm:p-8">
        <div className="grid gap-6">
          <Card className="bg-white shadow-lg">
            <CardHeader>
              <CardTitle className="text-[#333]">Jobs Applied</CardTitle>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="bg-[#333] text-white">Job Title</TableHead>
                    <TableHead className="bg-[#333] text-white">Company</TableHead>
                    <TableHead className="bg-[#333] text-white">Status</TableHead>
                    <TableHead className="bg-[#333] text-white">Details</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow>
                    <TableCell className="bg-white">
                      <div className="font-medium text-[#333]">Full-Stack Developer</div>
                    </TableCell>
                    <TableCell className="bg-white text-[#333]">Acme Inc</TableCell>
                    <TableCell className="bg-white">
                      <Badge variant="secondary" className="bg-[#ffd700] text-white px-3 py-1 rounded-full">
                        Pending
                      </Badge>
                    </TableCell>
                    <TableCell className="bg-white">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="bg-white">
                      <div className="font-medium text-[#333]">UI/UX Designer</div>
                    </TableCell>
                    <TableCell className="bg-white text-[#333]">Globex Corp</TableCell>
                    <TableCell className="bg-white">
                      <Badge variant="destructive" className="bg-[#ff0000] text-white px-3 py-1 rounded-full">
                        Rejected
                      </Badge>
                    </TableCell>
                    <TableCell className="bg-white">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="bg-white">
                      <div className="font-medium text-[#333]">Backend Engineer</div>
                    </TableCell>
                    <TableCell className="bg-white text-[#333]">Stark Industries</TableCell>
                    <TableCell className="bg-white">
                      <Badge variant="secondary" className="bg-[#ffd700] text-white px-3 py-1 rounded-full">
                        Pending
                      </Badge>
                    </TableCell>
                    <TableCell className="bg-white">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="bg-white">
                      <div className="font-medium text-[#333]">Frontend Developer</div>
                    </TableCell>
                    <TableCell className="bg-white text-[#333]">Wayne Enterprises</TableCell>
                    <TableCell className="bg-white">
                      <Badge variant="destructive" className="bg-[#ff0000] text-white px-3 py-1 rounded-full">
                        Rejected
                      </Badge>
                    </TableCell>
                    <TableCell className="bg-white">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="bg-white">
                      <div className="font-medium text-[#333]">Full-Stack Developer</div>
                    </TableCell>
                    <TableCell className="bg-white text-[#333]">Stark Industries</TableCell>
                    <TableCell className="bg-white">
                      <Badge variant="secondary" className="bg-[#ffd700] text-white px-3 py-1 rounded-full">
                        Pending
                      </Badge>
                    </TableCell>
                    <TableCell className="bg-white">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="bg-white">
                      <div className="font-medium text-[#333]">Data Scientist</div>
                    </TableCell>
                    <TableCell className="bg-white text-[#333]">Umbrella Corporation</TableCell>
                    <TableCell className="bg-white">
                      <Badge variant="secondary" className="bg-[#00ff00] text-white px-3 py-1 rounded-full">
                        Accepted
                      </Badge>
                    </TableCell>
                    <TableCell className="bg-white">
                      <Button variant="outline" size="sm">
                        View Details
                      </Button>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}